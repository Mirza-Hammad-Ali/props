import StudentCard from "./user";

function App() {
  return (
    <div>
      <StudentCard
        name="Ali"
        age={21}
        department="Software Engineering"
        semester={7}
        cgpa={3.45}
      />

      <StudentCard
        name="Hammad"
        age={22}
        department="Computer Science"
        semester={6}
        cgpa={3.45}
      />

      <StudentCard
        name="Ahmed"
        age={20}
        department="Information Technology"
        semester={5}
        cgpa={3.45}
      />
    </div>
  );
}

export default App;
