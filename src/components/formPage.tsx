import { MembershipForm } from "./membershipForm";

type FormPageProps = {
  closeForm: () => void;
};
export const FormPage: React.FC<FormPageProps> = ({
  closeForm }) => {
    const handleSuccess = () => {
    closeForm();
  };

  return (
    <div className="fixed bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center w-full h-full inset-0 z-50 ">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2 min-h-[300px] flex flex-col">
        <h2 className="text-xl mb-4 text-center">Add Member Information</h2>
        <MembershipForm onSuccess={handleSuccess} />
        <button
          className="hover:bg-blue-500 bg-blue-700 text-white px-4 py-2 rounded-md mt-4"
          onClick={closeForm}
        >
          Close
        </button>
      </div>
    </div>
  );
};