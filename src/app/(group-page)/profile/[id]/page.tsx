import axios from 'axios';
import { ButtonAddRecipe, CardProfile, CardStats, ThumbnailsRecipes } from '../../components'; // common components
import { BodyCardProfile } from '../components'; //profile components

//const recipes = new Array(20).fill('');

const getData = async (id: string) => {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL_BASE}/posts/${id}/posts`);
    return data;
  } catch (error) {
    console.log('Error al obtener el post');
  }
};

const page = async ({ params }) => {
  const recipes = await getData(params.id);

  return (
    <div
      className='flex flex-col items-center my-10 gap-6 
         overflow-x-hidden w-full md:w-4/6 xl:w-4/6 2xl:w-3/5 mx-auto'
    >
      <CardProfile>
        <BodyCardProfile />
      </CardProfile>
      <CardStats />
      <div className='flex gap-3 self-start items-center w-full h-20 pl-1'>
        <ButtonAddRecipe />
        <p className=''>Agregar Receta</p>
      </div>
      <ThumbnailsRecipes recipes={recipes} />
    </div>
  );
};

export default page;
