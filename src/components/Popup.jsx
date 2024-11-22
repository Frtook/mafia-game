import Button from "./ui/Button";

export default function Popup({ title, children, handleClick }) {
  return (
    <div className="fixed inset-0 bg-black/30">
      <div className="flex flex-col gap-5 p-5 mx-4 translate-y-[80%] sm:w-[70%] sm:mx-auto lg:w-[50%] text-white shadow-sm bg-main-400 shadow-white">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-300">{children}</p>
        <Button className={"self-center"} text="OK" handleClick={handleClick} />
      </div>
    </div>
  );
}
