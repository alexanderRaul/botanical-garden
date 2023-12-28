import Slader from '@/app/exploration/Slader';
import { render } from '@testing-library/react';

test('Slader renders correctly with different sets of trees', () => {
  // Arrange
  const treesSet1 = [
    { id: '1', scientific_name: 'Scientific Name 1', common_name: 'Common, Name 1', image_url: '/trees/populus-tremula.png' },
    { id: '2', scientific_name: 'Scientific Name 2', common_name: 'Common, Name 2', image_url: '/trees/populus-tremula.png' },
  ];

  const treesSet2 = [
    { id: '3', scientific_name: 'Scientific Name 3', common_name: 'Common, Name 3', image_url: '/trees/populus-tremula.png' },
    { id: '4', scientific_name: 'Scientific Name 4', common_name: 'Common, Name 4', image_url: '/trees/populus-tremula.png' },
  ];

  // Act
  // Renderiza el componente Slader dos veces, una vez con cada conjunto de árboles
  const { getAllByTestId } = render(
    <>
      <Slader trees={treesSet1} />
      <Slader trees={treesSet2} />
    </>
  );

  // Assert
  expect(getAllByTestId('item')).toHaveLength(treesSet1.length + treesSet2.length);
});
