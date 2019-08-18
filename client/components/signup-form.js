import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const days = [...Array(31).keys()]

const years = [...Array(82).keys()]

const genders = ['Male', 'Female']

const useStyles = makeStyles(theme => ({
  name: {
    width: '50%'
  },
  birthday: {
    width: '30%'
  },
  gender: {
    width: '40%'
  },
  aboutMe: {
    width: '88%'
  },
  photos: {
    height: 470,
    width: 700
  },
  menu: {
    width: 200
  }
}))

const SignupForm = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    month: 'August',
    day: 17,
    year: 2001,
    myGender: 'Female',
    mateGender: 'Male',
    photos: [
      'image/add-photo.png',
      'image/add-photo.png',
      'image/add-photo.png',
      'image/add-photo.png',
      'image/add-photo.png',
      'image/add-photo.png'
    ]
  })

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value})
  }

  return (
    // <Box width="30%">
    <form>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h6" component="h3">
          Name:
        </Typography>
        <TextField
          placeholder="First"
          className={classes.name}
          variant="outlined"
        />
        <TextField
          placeholder="Last"
          className={classes.name}
          variant="outlined"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h6" component="h3">
          Birthday:
        </Typography>
        <TextField
          select
          className={classes.birthday}
          onChange={handleChange('month')}
          value={values.month}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          variant="outlined"
        >
          {months.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={classes.birthday}
          onChange={handleChange('day')}
          value={values.day}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          variant="outlined"
        >
          {days.map(option => (
            <MenuItem key={option + 1} value={option + 1}>
              {option + 1}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={classes.birthday}
          onChange={handleChange('year')}
          value={values.year}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          variant="outlined"
        >
          {years.map(option => (
            <MenuItem key={2001 - option} value={2001 - option}>
              {2001 - option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h6" component="h3">
          I'm a
        </Typography>
        <TextField
          select
          className={classes.gender}
          onChange={handleChange('myGender')}
          value={values.myGender}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          variant="outlined"
        >
          {genders.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Typography variant="h6" component="h3">
          looking for a
        </Typography>
        <TextField
          select
          className={classes.gender}
          onChange={handleChange('mateGender')}
          value={values.mateGender}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          variant="outlined"
        >
          {genders.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box display="flex" alignItems="center" width="100%">
        <Typography variant="h6" component="h3">
          About me:
        </Typography>
        <TextField
          multiline
          rows="8"
          placeholder="Write something about yourself..."
          className={classes.aboutMe}
          variant="outlined"
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" component="h3">
          Photos:
        </Typography>
        <GridList
          className={classes.photos}
          cellHeight={200}
          cols={3}
          spacing={1}
        >
          {values.photos.map(photo => (
            <GridListTile key={photo} cols={1} rows={1}>
              <img src={photo} />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </form>
    // </Box>
  )
}

export default SignupForm
