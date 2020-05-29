const { Pact } = require("@pact-foundation/pact");
const CatsApiClient = require("./CatsApiClient");

jest.setTimeout(10000);

let provider;

beforeAll(() => {
  provider = new Pact({
    port: 1234,
    consumer: "CatinderUi",
    provider: "CatsApi",
  });

  return provider.setup().then(() =>
    provider.addInteraction({
      uponReceiving: "a request for a cat",
      withRequest: {
        path: "/cats",
        method: "GET",
      },
      willRespondWith: {
        body: {
          imageUri: "http://some-cat-image",
        },
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    })
  );
});

afterAll(() => {
  return provider.finalize();
});

afterEach(() => {
  return provider.verify();
});

it("should fetch random cat", () => {
  const catsApi = new CatsApiClient("http://localhost:1234");
  const foundCat = catsApi.findCat("bengal");

  return expect(foundCat).resolves.toEqual({
    imageUri: "http://some-cat-image",
  });
});
