interface CustomButtonProps {
  onClick: () => void; // You can adjust the type if you need to pass event details
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick }) => {
  return (
    <div className="login-center-buttons">
      <button type="button" onClick={onClick}>
        Log In
      </button>
    </div>
  );
};

export default CustomButton;
