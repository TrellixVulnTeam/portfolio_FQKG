import logo from "../../Logo.png";

export default function Logo() {
  return (
    <div className="flex justify-center">
      <img clasName="max-w-xs" src={logo.src} />
    </div>
  );
}
