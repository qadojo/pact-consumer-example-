import React, { useState } from "react";

import NyanCat from "./App/nyan-cat.png";

export default function App({ catsApiClient }) {
  const [catFound, setCatFound] = useState({});
  const [breed, setBreed] = useState("");

  function handleFindClick() {
    catsApiClient
      .findCat(breed)
      .then(setCatFound)
      .catch((e) => console.error(e));
  }

  return (
    <React.Fragment>
      <section className="hero is-link">
        <div className="hero-body">
          <div className="container">
            <img
              src={NyanCat}
              className="is-pulled-right"
              style={{ width: "100px" }}
            />
            <h1 className="title">Думаешь о котике?</h1>
            <h2 className="subtitle">
              Мы найдём тебе настоящего хвостатого друга
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-quarters-mobile is-half-tablet is-one-third-widescreen">
              <div className="field">
                <label className="label">Порода кота</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Введи породу кота твоей мечты"
                    onChange={setBreed}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-paw" />
                  </span>
                </div>
              </div>
              <div>
                <p className="has-text-grey	">
                  Мы свяжемся с тобой, как только договоримся
                  с&nbsp;подходящим&nbsp;тебе&nbsp;котом
                </p>
              </div>
              <br />
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" onClick={handleFindClick}>
                    Котиндер!
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              <figure className="image">
                <img src={catFound.imageUri} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
