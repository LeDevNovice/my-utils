# Kubernetes commands

#### Copy a file from a Kubernetes pod to a local destination on my machine.
_This is a useful command when I want to have some data inside a Kubernetes po to process some behaviour tests with concrete example to debug potential errors._
```bash
kubectl cp -n <namespace> <pod-name>:<destination/to/file/to/copy/><filename> <destination/where/to/copy/><filename>

kubectl cp -n nodejs nodejs-:/app/produits.json ./desktop/produits.json
```

#### Delete all the pods of a specific namespace that have an error status.
_This is a useful command when I have pods on a Kubernetes cluster that have multiplied again and again. Delete them allow me to have a more clear and readable cluster pods list._
```bash
kubectl delete pod -n <namespace> --field-selector="status.phase==Failed"
```