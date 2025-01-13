import React from 'react';
import Button from './Chore-Scheduler/chore-scheduler/src/components/examplebutton';
import addChore from './Chore-Scheduler/chore-scheduler/src/components/addChore';


export default function App() {
  return (
    <Button title="Press me" onPress={() => console.log('Button pressed')} />
  );
}


