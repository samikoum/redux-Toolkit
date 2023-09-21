import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./redux/user_slice";
import { counterActions } from "./redux/counter_slice";

function UserManagement() {
  // useState
  const [inputValue, setInputValue] = useState("");
  const [editInputs, setEditInputs] = useState(["", "", ""]);

  // useSelector - useDispatch
  const usersArray = useSelector((state) => state.users.usersArray);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // Add user
  function handleSubmit(e) {
    e.preventDefault();
    console.log(usersArray);
    if (!inputValue) return alert("Input should not be empty !");
    if (inputValue) {
      dispatch(userActions.setUsersArrayAddUser(inputValue));
      setInputValue("");
    }
  }

  // Delete user
  function deleteUser(id) {
    dispatch(userActions.setUsersArrayDeleteUser({ id }));
  }

  // update user
  function handleInputsChange(editInputValue, index) {
    let newEditInputs = [...editInputs];
    newEditInputs[index] = editInputValue;
    setEditInputs(newEditInputs);
  }
  function updateUser(id, index) {
    dispatch(
      userActions.setUsersArrayUpdateUser({ id, editInput: editInputs[index] })
    );
    setEditInputs(["", "", ""]);
  }
  return (
    <>
      <div className="app-user-management">
        <div className="app-user-management-container">
          <h1>{count}</h1>
          <button onClick={() => dispatch(counterActions.setCountAddCounter())}>
            +
          </button>
          <button>-</button>
          <div className="input-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="add username..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
              <button>add username</button>
            </form>
            <div className="users-box">
              {usersArray.map((user, index) => {
                return (
                  <div
                    key={user.id}
                    className="user-box"
                    style={{
                      width: "fit-content",
                      margin: "20px 0",
                      border: "2px solid #dddddd",
                      boxShadow: "0 0 10px 0 #dddddd",
                      borderRadius: "5px",
                      textAlign: "center",
                      padding: "0 10px 20px ",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }}>{user.username}</h1>
                    <div>
                      <input
                        id={user.id}
                        type="text"
                        placeholder="update username...."
                        onChange={(e) =>
                          handleInputsChange(e.target.value, index)
                        }
                        value={editInputs[index]}
                      />
                      <button onClick={() => updateUser(user.id, index)}>
                        update
                      </button>
                      <button onClick={() => deleteUser(user.id)}>
                        delete
                      </button>
                      {/* <button
                        onClick={() =>
                          dispatch(
                            userActions.setUsersArrayDeleteUser({ id: user.id })
                          )
                        }
                      >
                        delete
                      </button> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
