import React, { useContext } from 'react';
import TodoContext from './../../context/TodoContext';

const AddNewTask = () => {
     const context = useContext(TodoContext);
     return (
          <div className="w-50 mx-auto fixed-bottom mb-5 p-3 wrapper">
               <form
                    className="form-inline justify-content-center"
                    onSubmit={(e) => e.preventDefault()}
               >
                    <div className="input-group w-100">
                         <input
                              className="form-control rounded"
                              type="text"
                              onChange={context.handleTodoInput}
                              value={context.todo}
                              placeholder="اضافه کردن کار جدید"
                         />
                         <div className="input-group-input-group-prepend">
                              <button
                                   type="submit"
                                   onClick={context.handleCreateNewTodo}
                                   className="btn btn-sm bg-transparent fa fa-plus-square text-light"
                              />
                         </div>
                    </div>
               </form>
          </div>
     );
};

export default AddNewTask;
