import styles from "./ContainerMenu.module.css";

export default function ContainerMenu({
  children,
  img,
  alt,
  variant = "primary",
  className,
  imageVariant = "image",
  childrenClassName = "",

  ...props
}) {
  const moduleClassName = [styles.container, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <>
      <div className={moduleClassName} {...props}>
        {img && <img src={img} alt={alt} className={styles[imageVariant]} />}
        <div className={childrenClassName}>{children}</div>
      </div>
    </>
  );
}
