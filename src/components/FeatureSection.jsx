/*
* Description: Highlights app’s main features in a clean grid.
* Purpose: Show value proposition with visual + text.
* */

function FeatureSection() {
    return (
        <section> // Wrapper for the whole section
            <h2>...</h2> // Section title ("Features")

            <div className="grid"> // Grid container for cards
                <div className="card"> // FeatureCard #1
                    <img/> // Icon
                    <h3>...</h3> // Title
                    <p>...</p> // Description
                </div>

                <div className="card"> // FeatureCard #2
                    <img/>
                    <h3>...</h3>
                    <p>...</p>
                </div>

                <div className="card"> // FeatureCard #3
                    <img/>
                    <h3>...</h3>
                    <p>...</p>
                </div>

                <div className="card"> // FeatureCard #4
                    <img/>
                    <h3>...</h3>
                    <p>...</p>
                </div>
            </div>
        </section>

    )
}

export default FeatureSection;