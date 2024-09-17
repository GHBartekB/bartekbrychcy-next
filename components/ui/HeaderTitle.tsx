function HeaderTitle({ title }: { title: string }) {
  return (
    <h1 className="text-2xl sm:text-3xl font-semibold text-center uppercase leading-snug">
      {title}
    </h1>
  );
}

export default HeaderTitle;
