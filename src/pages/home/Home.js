import React from "react";
import "./home.css";

function Home() {

    return (
            <section className="home-section">
                <h2>The Dog finder app</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias beatae ipsa itaque numquam quibusdam quod, rem! A accusantium aliquam, aperiam architecto at autem commodi consequuntur culpa cumque deserunt dolores doloribus error excepturi fugit illum incidunt ipsa laboriosam maiores minus molestias nam necessitatibus nemo, nesciunt porro quae quia quibusdam quis sapiente velit vitae. Consequatur consequuntur distinctio doloremque ducimus explicabo inventore iste maxime natus omnis, optio perferendis perspiciatis repudiandae suscipit! Accusamus aliquam ex nemo similique voluptatibus.</p>
                <button
                    className="home-button"
                >Registreer</button>
                <button
                    className="home-button"
                >Inloggen</button>
            </section>
    );
}

export default Home;