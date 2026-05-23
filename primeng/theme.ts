export const themeTppConfig = {
semantic: {
  primary: {
    50: '#FFF1EB',
    100: '#FFE2D7',
    200: '#FFC4AF',
    300: '#FFA787',
    400: '#FF895F',
    500: '#FF6C37',
    600: '#CC562C',
    700: '#994121',
    800: '#662B16',
    900: '#33160B',
    950: '#33160B',
  },
  colorScheme: {
    light: {
      surface: {
        0: '#ffffff',
        25: '#F7F7F8',
        50: '#EFF0F1',
        100: '#DEE0E2',
        200: '#BDC2C6',
        300: '#9DA3A9',
        400: '#7C858D',
        500: '#5B6670',
        600: '#49525A',
        700: '#373D43',
        800: '#24292D',
        900: '#121416',
        950: '#121416',
      },
      green: {
        50: '#F3F8EB',
        100: '#E6F0D7',
        200: '#CDE1AF',
        300: '#B4D386',
        400: '#9BC45E',
        500: '#82B536',
        600: '#68912B',
        700: '#4E6D20',
        800: '#344816',
        900: '#1A240B',
        950: '#0F1607',
      },
      yellow: {
        50: '#FBF6E6',
        100: '#F5ECCC',
        200: '#ECD99A',
        300: '#E2C567',
        400: '#D9B235',
        500: '#CF9F02',
        600: '#A67F02',
        700: '#7C5F01',
        800: '#534001',
        900: '#292000',
        950: '#15120B',
      },
      red: {
        50: '#FCE8EC',
        100: '#F8D0D8',
        200: '#F1A1B1',
        300: '#EA728A',
        400: '#E34363',
        500: '#DC143C',
        600: '#B01030',
        700: '#840C24',
        800: '#580818',
        900: '#2C040C',
        950: '#160206',
      },
      blue: {
        50: '#ECF4FF',
        100: '#D7E8FF',
        200: '#AFD1FF',
        300: '#88B9FF',
        400: '#60A2FF',
        500: '#388BFF',
        600: '#2D6FCC',
        700: '#225399',
        800: '#163866',
        900: '#0B1C33',
        950: '#05091A',
      },
      content: {
        borderColor: '{surface.50}',
      },
      formField: {
        borderColor: '{surface.100}',
        hoverBorderColor: '{surface.200}',
        placeholderColor: '{surface.300}',
        paddingY: '0.4rem',
        paddingX: '0.7rem',
        color: '{surface.500}',
        sm: { fontSize: '0.75rem', paddingX: '0.6rem', paddingY: '0.25rem' },
        lg: { fontSize: '1rem' },
        disabledBackground: '{surface.50}',
        focusBorderColor: '{surface.300}',
        invalidBorderColor: '{red.500}',
        invalidPlaceholderColor: '{surface.300}',
      },
    },
  },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          outlined: {
            secondary: {
              borderColor: '{surface.100}',
            },
          },
          raisedShadow: '0 3px 1px -2px rgba(157,163,169,0.10), 0 2px 2px 0 rgba(157,163,169,0.07), 0 1px 5px 0 rgba(157,163,169,0.06)',
        },
      },
    },
    datatable: {
      headerCell: {
        background: '{surface.25}',
        borderColor: '{surface.100}',
        sm: {
          padding: '.85rem .75rem',
        },
      },
      bodyCell: {
        sm: {
          padding: '.5rem .7rem',
        },
      },
      footerCell: {
        background: '{surface.25}',
        borderColor: '{surface.100}',
      },
      row: {
        hoverBackground: '{surface.25}',
      },
    },
    tag: {
      fontSize: '0.75rem',
      fontWeight: '600',
    },
    dialog: {
      borderColor: 'transparent',
      header: {
        padding: '.5rem 1.25rem',
      },
      content: {
        padding: '1.25rem',
      },
    },
    message: {
      text: {
        fontSize: '0.75rem',
        sm: {
          fontSize: '0.75rem',
        },
      },
    },
    autocomplete: {
      colorScheme: {
        light: {
          dropdown: {
            background: 'white',
            hoverBackground: '{surface.25}',
            activeBackground: '{surface.50}',
            color: '{surface.400}',
          },
        },
      },
    },
    selectbutton: {
      borderRadius: '5rem',
    },
    togglebutton: {
      sm: {
        padding: '0.25rem 0',
      },
      content: {
        borderRadius: '25rem',
        sm: {
          padding: '0.075rem 0.65rem',
        },
        checkedShadow: '0px 1px 3px 0px rgba(0,0,0,0.10), 0px 1px 2px 0px rgba(0,0,0,0.06)',
      },
    },
    toggleswitch: {
      width: '2.15rem',
      height: '1.15rem',
      handleSize: '.75rem',
    },
    radiobutton: {
      icon: {
        size: '0.65rem',
      },
    },
    tooltip: {
      padding: '0.25rem 0.5rem',
      background: '{surface.700}',
    },
    popover: {
      borderColor: '{surface.100}',
    },
    menu: {
      borderColor: '{surface.100}',
      shadow: '0px 10px 15px -3px rgba(0,0,0,0.10), 0px 4px 6px -2px rgba(0,0,0,0.05)',
    },
    toast: {
      colorScheme: {
        light: {
          success: {
            shadow: '0px 10px 15px -3px rgba(104,145,43,0.1), 0px 4px 6px -2px rgba(104,145,43,0.10)',
          },
          warn: {
            shadow: '0px 10px 15px -3px rgba(166,127,2,0.1), 0px 4px 6px -2px rgba(166,127,2,0.10)',
          },
          error: {
            shadow: '0px 10px 15px -3px rgba(220,38,38,0.1), 0px 4px 6px -2px rgba(220,38,38,0.10)',
          },
        },
      },
    },
    accordion: {
      header: {
        background: '{surface.600}',
        color: '{surface.200}',
        padding: '.5rem',
        hoverBackground: '{surface.500}',
        hoverColor: 'white',
        activeBackground: '{surface.700}',
        activeColor: '{surface.200}',
        activeHoverBackground: '{surface.500}',
        activeHoverColor: 'white',
      },
      content: {
        background: '{surface.700}',
        color: '{surface.200}',
      },
    },
    drawer: {
      title: {
        fontSize: '1.25rem',
      },
    },
    panel: {
      borderColor: '{surface.100}',
    },
    fileupload: {
      borderColor: '{surface.100}',
    },
    select: {
      overlay: {
        borderColor: '{surface.100}',
      },
      focusBorderColor: '{surface.300}',
    },
    textarea: {
      focusBorderColor: '{surface.300}',
    },
    icon: {
      size: '0.15rem',
    },
  },
};
