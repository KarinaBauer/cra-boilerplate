import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  paperBg: '#161130',
  selection: '#2f2f56',
}

export const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: theme.paperBg,
    },
  },
  overrides: {},
})
