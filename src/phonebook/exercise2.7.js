import { useState } from "react";
import Person from "./component/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addNewPerson = (event) => {
    event.preventDefault();
    console.log(persons);
    // for (const checkPerson of persons) {
    //   if (checkPerson?.content === newName) {
    //     alert(newName + " " + "is already added to phonebook");
    //     return;
    //   }
    // }

    if (persons.some((checkPerson) => checkPerson?.content === newName)) {
      alert(newName + " " + 'is already added to phonebook')
    }

    const personObject = {
      content: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        name: <input value={newName} onChange={handlePersonChange} />
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default App;
