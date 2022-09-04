import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");

//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDoError("");
//     setToDo(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("first Name")} placeholder="fistName" />
        <input {...register("last Name")} placeholder="LastName" />
        <input {...register("username")} placeholder="userName" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("passwrod1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
