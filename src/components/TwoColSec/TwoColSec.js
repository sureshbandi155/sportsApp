
import classes from './TwoColSec.module.css';

const TwoColSec = props => {

let rowReverse = ['row',(props.rowReverse)?classes.rowReverse:null,classes.TwoColSecPadding]
return(

    <div className={rowReverse.join(' ')}>
        <div className="col-sm-12 col-md-6">
        <h2>Lorem Ipsum </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="col-sm-12 col-md-6" style={{'background':`url(${props.image})no-repeat top center /cover`}}>
        </div>

</div>
);
}

export default TwoColSec;