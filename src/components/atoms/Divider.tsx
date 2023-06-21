type DividerProps = {
  children?: React.ReactNode;
};

export default function Divider({ children }: DividerProps) {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-400"></div>
      {children && (
        <span className="mx-4 flex-shrink text-gray-600">{children}</span>
      )}
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}
