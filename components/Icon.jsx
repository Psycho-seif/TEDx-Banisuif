const Icon = ({ img, url = '#' }) => (
	<li className=''>
		<a
			className='block duration-200 ease-in-out transform cursor-pointer h-11 w-11 md:h-12 md:w-12 hover:scale-110 hover:rotate-360'
			href={url}
			target='_blank'
		>
			<img src={img} alt='icon' />
		</a>
	</li>
);

export default Icon;
