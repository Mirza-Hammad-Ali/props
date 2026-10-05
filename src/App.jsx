import StudentCard from "./user";

function App() {
  return (
    <div>
      <StudentCard
        name="Ali"
        age={21}
        department="Software Engineering"
        semester={7}
      />

      <StudentCard
        name="Hammad"
        age={22}
        department="Computer Science"
        semester={6}
      />

      <StudentCard
        name="Ahmed"
        age={20}
        department="Information Technology"
        semester={5}
      />
    </div>
  );
}

export default App;
