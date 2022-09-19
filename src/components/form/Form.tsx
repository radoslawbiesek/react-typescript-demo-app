import Button from "../button/Button";

type SearchForm = HTMLFormElement & {
  elements: HTMLFormControlsCollection & {
    search: HTMLInputElement;
  };
};

type FormProps = {
  handleSubmit: (search: string) => void;
};

const Form = ({ handleSubmit }: FormProps) => {
  const onSubmit = (event: React.FormEvent<SearchForm>) => {
    event.preventDefault();
    const search = event.currentTarget.elements.search.value;
    handleSubmit(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Search
        <input type="text" name="search" />
      </label>
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button as="input" type="reset" />
    </form>
  );
};

export default Form;
