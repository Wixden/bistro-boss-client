const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <>
      <div className="flex gap-5 flex-col md:flex-row items-center py-10 md:py-0">
        <img
          src={image}
          alt={name}
          className="h-[104px] rounded-tr-full rounded-br-full rounded-bl-full"
        />
        <div>
          <h4 className="text-xl uppercase">{name} ------------------</h4>
          <p className="text-gray-400">{recipe}</p>
        </div>
        <p className="text-amber-500 font-medium">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
