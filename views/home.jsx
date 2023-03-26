const React = require('react')
const Default = require('./default')

function Home() {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="http://placekitten.com/250/250" alt="cat" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Default>
    )
}

module.exports = Home