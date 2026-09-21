// /src/components/common/InputField.tsx
import capitalize from '../../core/utils/capitalize.ts';

interface IInputPropsType{
    label: string,
    type : string,
    className? : string | undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    children?: React.ReactNode,
};

const InputField = (props: IInputPropsType) => {
  return (
    <div className={`${props.className ? props.className : ""}`}>
      <label htmlFor={props.label} className="form-label">
        {capitalize(props.label)}
      </label>
      <div className="mt-2 mb-3">
        <input
          id={props.label}
          name={props.label}
          type={props.type}
          onChange={props.onChange}
          autoComplete="current-password"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default InputField;
