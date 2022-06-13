import FactCard from "./FactCard"

const Section1 = (props) => {
    return(<section {...props}>
        <div>section 1 image</div>
        <div>
            <FactCard/>
            <FactCard/>
            <FactCard/>
            <FactCard/>
        </div>
    </section>)
}

export default Section1