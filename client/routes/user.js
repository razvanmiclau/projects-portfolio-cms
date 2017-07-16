import jwt from 'jsonwebtoken';
import moment from 'moment';
import Admin from '../../models/admin';

//import { TOKEN_SECRET } from '../../config';
import config from '../../config';

const createToken = name => {
  let payload = {
    sub: name,
    exp: moment().add(1, 'day').unix()
  }
  return jwt.sign(payload, config.TOKEN_SECRET);
}

export const signup = (req, res) => {
  Admin.findOne({ email: req.body.email }, (err, exisingAdmin) => {
    if (exisingAdmin) return res.status(409).json({ message: 'Email is already taken'});

    const admin = Object.assign(new Admin(), req.body);
    admin.save((err, result) => {
      if (err) res.send(err);
      res.json({
        message: 'Welcome Razvan, you are logged in!',
        token: createToken(result.name)
      });
    });
  });
}

export const login = (req, res) => {
  Admin.findOne({ email: req.body.email }, '+password', (err, admin) => {
    if (!admin) return res.status(401).json({ message: 'Invalid email or password!'});

    admin.comparePwd(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).json({ message: 'Invalid email or password!'});

      res.json({ message: 'You are logged in!', token: createToken(admin.name)} );
    });
  });
}

export const checkAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, config.TOKEN_SECRET, function(err, payload) {
      if (err) {
        return res.status(403).send({
          message: 'Failed to authenticate provided token.'
        });
      } else {
        next();
      }
    })
  } else {
    return res.status(403).send({
      message: 'Failed to detect the token.'
    });
  }
}
