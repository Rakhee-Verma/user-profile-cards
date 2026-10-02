function ProfileImage({ src, alt, className=" "}) {
  return (
    <div className={`w-20 h-20 rounded-full overflow-hidden bg-gray-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 hover:scale-110 ${className}`}
      />
    </div>
  );
}
export default ProfileImage;
