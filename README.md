# ecs-test
#### IAM attach policies created a lamdba group and attach to lambda user
AmazonEC2ContainerRegistryPowerUser
AmazonEC2ContainerRegistryFullAccess
AmazonECS_FullAccess
AmazonS3FullAccess
AmazonSSMFullAccess
AWSCloudFormationFullAccess
CloudWatchFullAccess
ElasticLoadBalancingFullAccess
IAMFullAccess

#### To stop service check the list of services, task
aws ecs list-services --cluster signage-svc
aws ecs list-tasks --cluster signage-svc 
aws ecs update-service --cluster signage-svc --service signage-auth-dev-EcsServiceAuth-9OAAmLS9mfRw --desired-count 0
aws ecs list-tasks --cluster signage-svc 
aws ecs delete-service --cluster signage-svc --service signage-auth-dev-EcsServiceAuth-9OAAmLS9mfRw

#### If you stop the task wihtout desired count 0 it will became daemon
aws ecs list-tasks --cluster signage-svc 
aws ecs stop-task --cluster signage-svc --task fb2c7aabe50748a39b894563beb8a573
#### List ECS Task Definitions
List ECS Task Definitions
#### To run the task using task definition
aws ecs run-task `
  --cluster signage-svc `
  --task-definition signage-auth:5 `
  --launch-type FARGATE `
  --network-configuration "awsvpcConfiguration={subnets=[subnet-0694073f03cdc80a7,subnet-003f960384c510393,subnet-097a00a19d8b07d73],securityGroups=[sg-0d982615fe1d11784],assignPublicIp=ENABLED}"
#### Delete task definition
aws ecs deregister-task-definition --task-definition signage-auth:1
#### display s3 and delete object than s3 bucket
aws s3 ls
aws s3 ls s3://<bucket-name>/
aws s3 rm s3://<bucket-name>/ --recursive (empty the bucket)
aws s3 rb s3://<bucket-name>/ (empty bucket)

#### Display ALB, listner delete listner, ALB
aws elbv2 describe-load-balancers
aws elbv2 describe-listeners --load-balancer-arn <load-balancer-arn>
aws elbv2 delete-listener --listener-arn <listener-arn>
aws elbv2 delete-load-balancer --load-balancer-arn <load-balancer-arn>

#### Empty ECR, and delete
aws ecr describe-repositories
aws ecr list-images --repository-name <repository-name>
aws ecr batch-delete-image --repository-name <repository-name> --image-ids imageTag=<tag>
aws ecr delete-repository --repository-name <repository-name> --force


- Open AWS Certificate Manager (ACM)> Request a public certificate
- Open techprasanth.xyz > create record > www, A Record , toggle alias select Alias LB, region, ALB Name., simple routing create.
-  Copy CNAME of ACM Open Route 53  www, CNAME, value and paste






