const Details = ({detail}) => (
    <div>
        Order:{detail.order}<br/> 
        Born: {detail.yob}<br/>
        Died: {detail.yod}
    </div>
);

export default Details;