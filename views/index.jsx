const React = require('react')
const Default = require('./layouts/default')

function Index({breads, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>My favorite bread is {breads[1].name}</p> */}

            <ul>
                {
                    breads.map((bread) => {
                        return (
                            <li key={bread.id}>
                                <a href={`/breads/${bread.id}`}>{bread.name}</a>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="newButton">
                <a href="/breads/new">
                    <button>Add New Bread</button>
                </a>
            </div>
        </Default>
    )
}

module.exports = Index