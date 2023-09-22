import mongoose from 'mongoose';

const connectDb = async () => {
	try {
		const conn = await mongoose.connect('mongodb://103.240.204.43/32', {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold);
		process.exit(1);
	}
};

export default connectDb;
