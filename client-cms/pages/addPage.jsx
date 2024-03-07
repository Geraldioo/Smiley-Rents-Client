import Form from "../components/form";

const AddPage = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2 col-md-9 ms-sm-auto col-lg-10 px-md-4">Add New Lodgings</h1>
        </div>
        <Form />
      </div>
    </>
  );
};

export default AddPage;
