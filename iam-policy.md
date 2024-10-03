AmazonAPIGatewayAdministrator
AmazonAPIGatewayInvokeFullAccess
AWSLambda_FullAccess
AWSLambdaRole

ssm-getparameter
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "ssm:GetParameter",
			"Resource": "arn:aws:ssm:us-east-1:180294218712:parameter/serverless-framework/deployment/s3-bucket"
		}
	]
}
```
ssm-putparameter
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "ssm:PutParameter",
			"Resource": "arn:aws:ssm:us-east-1:180294218712:parameter/serverless-framework/deployment/s3-bucket"
		}
	]
}
```