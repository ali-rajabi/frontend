const ListTemplate = ({ title, children }) => {
  return (
    <div className="list-wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

ListTemplate.defaultProps = {
  title: "ali",
};

export default ListTemplate;
