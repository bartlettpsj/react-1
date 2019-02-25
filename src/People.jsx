import Person from './Person';
import Details from './Details';
import Wives from './Wives'

const People = ({title, items}) =>  (
    <div>
        <header>
            <h2>{title}</h2>
            {items.map(person => 
                <div>
                    <Person name={person.name}/>
                    <Details detail={person.detail}/>
                    <Wives wives={person.wives}/>
                </div>)}
        </header>
    </div>
);

export default People;