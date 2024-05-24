import Button from "../Button/Button";
import DropDown from "../DropDownMenu/DropDown/DropDown";
import DropDownItem from "../DropDownMenu/DropDownItem/DropDownItem";
import './FindSection.css'

export default function FindSection() {
    const items = [1, 2, 3, 4, 5]

    return(
        <section className="findSection">
            <div className="findSectionContainer">
                <div className="findSection__header">
                    <h1>Найти мероприятия</h1>
                </div>
                <div className="findSection__filters">
                    <DropDown buttonText="Categories" content={<>
                    {
                        items.map(item => <DropDownItem key={item}>{`Item ${item}`}</DropDownItem>)
                    }
                    </>}/>
                </div>
                <div className="findSection__buttons">
                    <Button>Go</Button>
                </div>
            </div>
        </section>
    )
}