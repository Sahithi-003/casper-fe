import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleSelection from '.';
import React from 'react';
import eyeIcon from '../../../public/images/eye.svg';
import fileIcon from '../../../public/icons/file-05.svg';

const onSelection = jest.fn();

describe('Renders toggle selection component', () => {
  // test('Should Renders icon toggle selection component', () => {
  //   render(
  //     <ToggleSelection
  //       type="icon"
  //       data={[
  //         eyeIcon,
  //         fileIcon,
  //       ]}
  //       activeIndex={0}
  //       onSelection={onSelection}
  //     />,
  //   );
  //   const component = screen.getByTestId('toggle-selection');
  //   const iconButtons = screen.getAllByTestId('iconComponent');
  //   fireEvent.click(iconButtons[0]);
  //   expect(component).toBeInTheDocument();
  //   expect(onSelection).toBeCalled();
  // });

  test('Should Renders letter toggle selection component', () => {
    render(
      <ToggleSelection
        type="letter"
        data={['S', 'M', 'L']}
        activeIndex={0}
        onSelection={onSelection}
      />,
    );
    const component = screen.getByTestId('toggle-selection');
    expect(component).toBeInTheDocument();
    const iconButtons = screen.getAllByTestId('iconComponent');
    fireEvent.click(iconButtons[0]);
    expect(onSelection).toBeCalled();
  });
});
