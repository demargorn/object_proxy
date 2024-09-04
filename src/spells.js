const getSpells = (object) => {
   const { special } = object;

   special.forEach((item) => {
      if (!item.description) {
         item.description = 'Описание недоступно';
      }
   });
   return special;
};

export { getSpells };
