import logo from './logo.svg';
import './App.css';
import { fetchChores } from '../../backend/models/csFirebase';

const ChoreList = () => {
  //create a state so we can use that variable to display stuff and the updateState to update it 
  const [chores, setChores] = useState([]);
  useEffect(() => { //useEffect itself is not an async function so you need to define a function thats async within and call it
    const getChores = async () => {
      const totalChores = await fetchChores();
      setChores(totalChores);
    }
    getChores();
  }, []);
  return (
    <div>
      {chores.map((chore, index) => (
      <div key={index} className="chore-box">
        <h3>{chore.name}</h3>
        <p>{chore.description}</p>
      </div>
    ))}
    </div>
  );
};
export default ChoreList;
