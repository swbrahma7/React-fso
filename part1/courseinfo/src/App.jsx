
const Header = (course) => {
  //args/attrs are wrapped as object before being passed here
  return (
    <>
      <h1>{course.coursename}</h1>
    </>
  );
};

const Total = (props) => {
  return (
    <>
        <p>Number of exercises {props.total}</p>
    </>
  );
};

//accept an array of {partname, exercises} objects
const Content = (props) => {
  console.log(props);
  let tempprops = props.coursecontent;
  
  return (
    <>
      <p>{tempprops[0].partname} {tempprops[0].exercises}</p>
      <p>{tempprops[1].partname} {tempprops[1].exercises}</p>
      <p>{tempprops[2].partname} {tempprops[2].exercises}</p>
    </>
  );
};

function App() {
  //const [count, setCount] = useState(0)

  const course = "Half stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const coursecontentarray = [
    {partname: part1, exercises: exercises1},
    {partname: part2, exercises: exercises2},
    {partname: part3, exercises: exercises3}
  ];
  /*any JS code inside the JSX MUST be in {}
  -can also directly pass {[...]} instead of creating variable above
  -using this array makes the values mutable; why are we using const here, again?*/

  return (
    <div>
      <Header coursename={course} />
      <Content coursecontent = {coursecontentarray} />
      <br />
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
} 

export default App
