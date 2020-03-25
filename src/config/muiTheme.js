import { createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: theme.paperBg,
    },
  },
  overrides: {},
});
