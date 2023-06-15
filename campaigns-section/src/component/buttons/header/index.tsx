const HeaderButton = ({ action }: { action: string }) => {
  return (
    <div className="bg-[#6ac17a] text-white px-4 py-1">
      {action ?? 'Create'}
    </div>
  );
};

export default HeaderButton;
