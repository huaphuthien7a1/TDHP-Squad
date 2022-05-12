import Login from 'components/Login/Login';
import { motion } from 'framer-motion';
const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Login></Login>
    </motion.div>
  );
};

export default LoginPage;
