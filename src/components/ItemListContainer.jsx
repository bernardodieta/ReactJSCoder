import './main.css';

const ItemsListContainer = (props) => {
    const {greeting} = props;
    return (
        <div className="items-container">
            <h2>{greeting}</h2>
            <div className='category'>Category:
                <button className='btn'>Plantas para Interior</button>
                <button className='btn'>Plantas para Exterior</button>
                <button className='btn'>Plantas para parques</button>
            
            </div>
        </div>
      
        
    )
}

export default ItemsListContainer;