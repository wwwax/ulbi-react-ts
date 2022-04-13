import Card from "./components/Card";
import User from './components/User';
import { v4 as uuidv4 } from 'uuid';
import Btn from './components/Btn';

export default function App() {
  return (
    <div>
      <Card width="100px" height="100px">
        <div>Hello</div>
      </Card>

      <User id={uuidv4()} name="Adam" age={33} married={true} />

      <Btn
        bg="tomato"
        onClick={(num) => {
          console.log('num :>> ', num); 
        }}
      >
        ClickMe
      </Btn>
    </div>
  );
};
