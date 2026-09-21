import Card from "./Card";

// /src/components/common/Alert.tsx
interface IAlertPropsType {
  kind: "success" | "danger" | "info" | "warning" | "error";
  msg: string;
}

const Alert = ({ kind, msg }: IAlertPropsType) => {
  return (
    <div className="d-flex flex-row justify-content-center mb-2">
      <Card
        className={`text-bg-${kind} p-1 col-10 align-items-center`}
      >
        <p>{msg}</p>
      </Card>
    </div>
  );
};

export default Alert;
