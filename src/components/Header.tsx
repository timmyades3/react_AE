import {  type JSX } from "react"
import './../App.css';

export default function Header():JSX.Element {
    return (
        <section className="header-section">
          <header>
            <h1 className="title">Assembly: Endgame</h1>
            <p className="about">
              Guess the word in under 8 attempts to keep the programming world
              safe from Assembly!
            </p>
          </header>
        </section>
    )
}
